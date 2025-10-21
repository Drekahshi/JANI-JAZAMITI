CREATE OR REPLACE FUNCTION get_user_tree_count(user_id integer)
RETURNS integer AS $$
DECLARE
  tree_count integer;
BEGIN
  SELECT count(*) INTO tree_count
  FROM tree_submissions
  WHERE "userId" = user_id;
  RETURN tree_count;
END;
$$ LANGUAGE plpgsql;

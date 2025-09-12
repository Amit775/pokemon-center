import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveMetaCategoriesCreateManyInput } from "../../../inputs/MoveMetaCategoriesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMoveMetaCategoriesArgs {
  @TypeGraphQL.Field(_type => [MoveMetaCategoriesCreateManyInput], {
    nullable: false
  })
  data!: MoveMetaCategoriesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

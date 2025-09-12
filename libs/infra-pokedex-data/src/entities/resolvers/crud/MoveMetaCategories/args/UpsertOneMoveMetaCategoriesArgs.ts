import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveMetaCategoriesCreateInput } from "../../../inputs/MoveMetaCategoriesCreateInput";
import { MoveMetaCategoriesUpdateInput } from "../../../inputs/MoveMetaCategoriesUpdateInput";
import { MoveMetaCategoriesWhereUniqueInput } from "../../../inputs/MoveMetaCategoriesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMoveMetaCategoriesArgs {
  @TypeGraphQL.Field(_type => MoveMetaCategoriesWhereUniqueInput, {
    nullable: false
  })
  where!: MoveMetaCategoriesWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveMetaCategoriesCreateInput, {
    nullable: false
  })
  create!: MoveMetaCategoriesCreateInput;

  @TypeGraphQL.Field(_type => MoveMetaCategoriesUpdateInput, {
    nullable: false
  })
  update!: MoveMetaCategoriesUpdateInput;
}

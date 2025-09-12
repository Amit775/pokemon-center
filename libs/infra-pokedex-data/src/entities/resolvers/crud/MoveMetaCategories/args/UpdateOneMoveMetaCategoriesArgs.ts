import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveMetaCategoriesUpdateInput } from "../../../inputs/MoveMetaCategoriesUpdateInput";
import { MoveMetaCategoriesWhereUniqueInput } from "../../../inputs/MoveMetaCategoriesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneMoveMetaCategoriesArgs {
  @TypeGraphQL.Field(_type => MoveMetaCategoriesUpdateInput, {
    nullable: false
  })
  data!: MoveMetaCategoriesUpdateInput;

  @TypeGraphQL.Field(_type => MoveMetaCategoriesWhereUniqueInput, {
    nullable: false
  })
  where!: MoveMetaCategoriesWhereUniqueInput;
}

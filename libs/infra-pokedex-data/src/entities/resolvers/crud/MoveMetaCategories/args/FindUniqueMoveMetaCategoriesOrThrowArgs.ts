import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveMetaCategoriesWhereUniqueInput } from "../../../inputs/MoveMetaCategoriesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueMoveMetaCategoriesOrThrowArgs {
  @TypeGraphQL.Field(_type => MoveMetaCategoriesWhereUniqueInput, {
    nullable: false
  })
  where!: MoveMetaCategoriesWhereUniqueInput;
}

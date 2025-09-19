import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveWhereUniqueInput } from "../../../inputs/MoveWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueMoveOrThrowArgs {
  @TypeGraphQL.Field(_type => MoveWhereUniqueInput, {
    nullable: false
  })
  where!: MoveWhereUniqueInput;
}

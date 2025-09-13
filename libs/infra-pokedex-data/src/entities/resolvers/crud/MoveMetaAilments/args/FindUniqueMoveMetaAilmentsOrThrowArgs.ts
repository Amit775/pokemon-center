import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveMetaAilmentsWhereUniqueInput } from "../../../inputs/MoveMetaAilmentsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueMoveMetaAilmentsOrThrowArgs {
  @TypeGraphQL.Field(_type => MoveMetaAilmentsWhereUniqueInput, {
    nullable: false
  })
  where!: MoveMetaAilmentsWhereUniqueInput;
}

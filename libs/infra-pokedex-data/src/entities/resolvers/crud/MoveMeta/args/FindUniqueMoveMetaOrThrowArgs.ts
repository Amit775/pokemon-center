import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveMetaWhereUniqueInput } from "../../../inputs/MoveMetaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueMoveMetaOrThrowArgs {
  @TypeGraphQL.Field(_type => MoveMetaWhereUniqueInput, {
    nullable: false
  })
  where!: MoveMetaWhereUniqueInput;
}

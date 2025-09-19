import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TypeWhereUniqueInput } from "../../../inputs/TypeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneTypeArgs {
  @TypeGraphQL.Field(_type => TypeWhereUniqueInput, {
    nullable: false
  })
  where!: TypeWhereUniqueInput;
}

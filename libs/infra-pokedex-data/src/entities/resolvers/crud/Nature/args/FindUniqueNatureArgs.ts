import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NatureWhereUniqueInput } from "../../../inputs/NatureWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueNatureArgs {
  @TypeGraphQL.Field(_type => NatureWhereUniqueInput, {
    nullable: false
  })
  where!: NatureWhereUniqueInput;
}

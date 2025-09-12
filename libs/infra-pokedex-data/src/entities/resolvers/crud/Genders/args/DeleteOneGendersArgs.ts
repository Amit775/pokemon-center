import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GendersWhereUniqueInput } from "../../../inputs/GendersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneGendersArgs {
  @TypeGraphQL.Field(_type => GendersWhereUniqueInput, {
    nullable: false
  })
  where!: GendersWhereUniqueInput;
}

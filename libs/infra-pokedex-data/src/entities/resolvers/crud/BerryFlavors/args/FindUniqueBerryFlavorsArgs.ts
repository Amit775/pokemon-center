import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BerryFlavorsWhereUniqueInput } from "../../../inputs/BerryFlavorsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueBerryFlavorsArgs {
  @TypeGraphQL.Field(_type => BerryFlavorsWhereUniqueInput, {
    nullable: false
  })
  where!: BerryFlavorsWhereUniqueInput;
}

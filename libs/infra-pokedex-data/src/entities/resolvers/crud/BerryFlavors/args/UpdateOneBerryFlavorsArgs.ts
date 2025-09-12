import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BerryFlavorsUpdateInput } from "../../../inputs/BerryFlavorsUpdateInput";
import { BerryFlavorsWhereUniqueInput } from "../../../inputs/BerryFlavorsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneBerryFlavorsArgs {
  @TypeGraphQL.Field(_type => BerryFlavorsUpdateInput, {
    nullable: false
  })
  data!: BerryFlavorsUpdateInput;

  @TypeGraphQL.Field(_type => BerryFlavorsWhereUniqueInput, {
    nullable: false
  })
  where!: BerryFlavorsWhereUniqueInput;
}

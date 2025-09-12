import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BerryFlavorsCreateInput } from "../../../inputs/BerryFlavorsCreateInput";
import { BerryFlavorsUpdateInput } from "../../../inputs/BerryFlavorsUpdateInput";
import { BerryFlavorsWhereUniqueInput } from "../../../inputs/BerryFlavorsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneBerryFlavorsArgs {
  @TypeGraphQL.Field(_type => BerryFlavorsWhereUniqueInput, {
    nullable: false
  })
  where!: BerryFlavorsWhereUniqueInput;

  @TypeGraphQL.Field(_type => BerryFlavorsCreateInput, {
    nullable: false
  })
  create!: BerryFlavorsCreateInput;

  @TypeGraphQL.Field(_type => BerryFlavorsUpdateInput, {
    nullable: false
  })
  update!: BerryFlavorsUpdateInput;
}

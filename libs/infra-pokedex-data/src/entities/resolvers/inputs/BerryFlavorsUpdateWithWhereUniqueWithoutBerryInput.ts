import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFlavorsUpdateWithoutBerryInput } from "../inputs/BerryFlavorsUpdateWithoutBerryInput";
import { BerryFlavorsWhereUniqueInput } from "../inputs/BerryFlavorsWhereUniqueInput";

@TypeGraphQL.InputType("BerryFlavorsUpdateWithWhereUniqueWithoutBerryInput", {})
export class BerryFlavorsUpdateWithWhereUniqueWithoutBerryInput {
  @TypeGraphQL.Field(_type => BerryFlavorsWhereUniqueInput, {
    nullable: false
  })
  where!: BerryFlavorsWhereUniqueInput;

  @TypeGraphQL.Field(_type => BerryFlavorsUpdateWithoutBerryInput, {
    nullable: false
  })
  data!: BerryFlavorsUpdateWithoutBerryInput;
}

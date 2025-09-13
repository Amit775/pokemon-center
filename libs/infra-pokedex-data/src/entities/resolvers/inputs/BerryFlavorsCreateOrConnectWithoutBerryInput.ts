import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFlavorsCreateWithoutBerryInput } from "../inputs/BerryFlavorsCreateWithoutBerryInput";
import { BerryFlavorsWhereUniqueInput } from "../inputs/BerryFlavorsWhereUniqueInput";

@TypeGraphQL.InputType("BerryFlavorsCreateOrConnectWithoutBerryInput", {})
export class BerryFlavorsCreateOrConnectWithoutBerryInput {
  @TypeGraphQL.Field(_type => BerryFlavorsWhereUniqueInput, {
    nullable: false
  })
  where!: BerryFlavorsWhereUniqueInput;

  @TypeGraphQL.Field(_type => BerryFlavorsCreateWithoutBerryInput, {
    nullable: false
  })
  create!: BerryFlavorsCreateWithoutBerryInput;
}

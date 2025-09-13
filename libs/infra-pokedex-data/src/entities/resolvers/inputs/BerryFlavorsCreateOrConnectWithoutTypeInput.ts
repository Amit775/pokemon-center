import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFlavorsCreateWithoutTypeInput } from "../inputs/BerryFlavorsCreateWithoutTypeInput";
import { BerryFlavorsWhereUniqueInput } from "../inputs/BerryFlavorsWhereUniqueInput";

@TypeGraphQL.InputType("BerryFlavorsCreateOrConnectWithoutTypeInput", {})
export class BerryFlavorsCreateOrConnectWithoutTypeInput {
  @TypeGraphQL.Field(_type => BerryFlavorsWhereUniqueInput, {
    nullable: false
  })
  where!: BerryFlavorsWhereUniqueInput;

  @TypeGraphQL.Field(_type => BerryFlavorsCreateWithoutTypeInput, {
    nullable: false
  })
  create!: BerryFlavorsCreateWithoutTypeInput;
}

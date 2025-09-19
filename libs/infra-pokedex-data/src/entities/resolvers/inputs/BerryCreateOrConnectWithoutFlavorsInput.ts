import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryCreateWithoutFlavorsInput } from "../inputs/BerryCreateWithoutFlavorsInput";
import { BerryWhereUniqueInput } from "../inputs/BerryWhereUniqueInput";

@TypeGraphQL.InputType("BerryCreateOrConnectWithoutFlavorsInput", {})
export class BerryCreateOrConnectWithoutFlavorsInput {
  @TypeGraphQL.Field(_type => BerryWhereUniqueInput, {
    nullable: false
  })
  where!: BerryWhereUniqueInput;

  @TypeGraphQL.Field(_type => BerryCreateWithoutFlavorsInput, {
    nullable: false
  })
  create!: BerryCreateWithoutFlavorsInput;
}

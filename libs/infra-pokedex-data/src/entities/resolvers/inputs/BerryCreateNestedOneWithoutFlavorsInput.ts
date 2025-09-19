import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryCreateOrConnectWithoutFlavorsInput } from "../inputs/BerryCreateOrConnectWithoutFlavorsInput";
import { BerryCreateWithoutFlavorsInput } from "../inputs/BerryCreateWithoutFlavorsInput";
import { BerryWhereUniqueInput } from "../inputs/BerryWhereUniqueInput";

@TypeGraphQL.InputType("BerryCreateNestedOneWithoutFlavorsInput", {})
export class BerryCreateNestedOneWithoutFlavorsInput {
  @TypeGraphQL.Field(_type => BerryCreateWithoutFlavorsInput, {
    nullable: true
  })
  create?: BerryCreateWithoutFlavorsInput | undefined;

  @TypeGraphQL.Field(_type => BerryCreateOrConnectWithoutFlavorsInput, {
    nullable: true
  })
  connectOrCreate?: BerryCreateOrConnectWithoutFlavorsInput | undefined;

  @TypeGraphQL.Field(_type => BerryWhereUniqueInput, {
    nullable: true
  })
  connect?: BerryWhereUniqueInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesCreateOrConnectWithoutBerryFlavorsInput } from "../inputs/TypesCreateOrConnectWithoutBerryFlavorsInput";
import { TypesCreateWithoutBerryFlavorsInput } from "../inputs/TypesCreateWithoutBerryFlavorsInput";
import { TypesWhereUniqueInput } from "../inputs/TypesWhereUniqueInput";

@TypeGraphQL.InputType("TypesCreateNestedOneWithoutBerryFlavorsInput", {})
export class TypesCreateNestedOneWithoutBerryFlavorsInput {
  @TypeGraphQL.Field(_type => TypesCreateWithoutBerryFlavorsInput, {
    nullable: true
  })
  create?: TypesCreateWithoutBerryFlavorsInput | undefined;

  @TypeGraphQL.Field(_type => TypesCreateOrConnectWithoutBerryFlavorsInput, {
    nullable: true
  })
  connectOrCreate?: TypesCreateOrConnectWithoutBerryFlavorsInput | undefined;

  @TypeGraphQL.Field(_type => TypesWhereUniqueInput, {
    nullable: true
  })
  connect?: TypesWhereUniqueInput | undefined;
}

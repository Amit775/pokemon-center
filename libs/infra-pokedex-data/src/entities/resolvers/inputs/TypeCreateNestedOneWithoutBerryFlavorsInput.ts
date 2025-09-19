import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeCreateOrConnectWithoutBerryFlavorsInput } from "../inputs/TypeCreateOrConnectWithoutBerryFlavorsInput";
import { TypeCreateWithoutBerryFlavorsInput } from "../inputs/TypeCreateWithoutBerryFlavorsInput";
import { TypeWhereUniqueInput } from "../inputs/TypeWhereUniqueInput";

@TypeGraphQL.InputType("TypeCreateNestedOneWithoutBerryFlavorsInput", {})
export class TypeCreateNestedOneWithoutBerryFlavorsInput {
  @TypeGraphQL.Field(_type => TypeCreateWithoutBerryFlavorsInput, {
    nullable: true
  })
  create?: TypeCreateWithoutBerryFlavorsInput | undefined;

  @TypeGraphQL.Field(_type => TypeCreateOrConnectWithoutBerryFlavorsInput, {
    nullable: true
  })
  connectOrCreate?: TypeCreateOrConnectWithoutBerryFlavorsInput | undefined;

  @TypeGraphQL.Field(_type => TypeWhereUniqueInput, {
    nullable: true
  })
  connect?: TypeWhereUniqueInput | undefined;
}

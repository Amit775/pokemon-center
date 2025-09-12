import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesCreateOrConnectWithoutNaturalGiftTypesInput } from "../inputs/TypesCreateOrConnectWithoutNaturalGiftTypesInput";
import { TypesCreateWithoutNaturalGiftTypesInput } from "../inputs/TypesCreateWithoutNaturalGiftTypesInput";
import { TypesWhereUniqueInput } from "../inputs/TypesWhereUniqueInput";

@TypeGraphQL.InputType("TypesCreateNestedOneWithoutNaturalGiftTypesInput", {})
export class TypesCreateNestedOneWithoutNaturalGiftTypesInput {
  @TypeGraphQL.Field(_type => TypesCreateWithoutNaturalGiftTypesInput, {
    nullable: true
  })
  create?: TypesCreateWithoutNaturalGiftTypesInput | undefined;

  @TypeGraphQL.Field(_type => TypesCreateOrConnectWithoutNaturalGiftTypesInput, {
    nullable: true
  })
  connectOrCreate?: TypesCreateOrConnectWithoutNaturalGiftTypesInput | undefined;

  @TypeGraphQL.Field(_type => TypesWhereUniqueInput, {
    nullable: true
  })
  connect?: TypesWhereUniqueInput | undefined;
}

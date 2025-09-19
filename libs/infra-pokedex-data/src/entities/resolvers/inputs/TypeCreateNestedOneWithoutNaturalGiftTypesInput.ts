import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeCreateOrConnectWithoutNaturalGiftTypesInput } from "../inputs/TypeCreateOrConnectWithoutNaturalGiftTypesInput";
import { TypeCreateWithoutNaturalGiftTypesInput } from "../inputs/TypeCreateWithoutNaturalGiftTypesInput";
import { TypeWhereUniqueInput } from "../inputs/TypeWhereUniqueInput";

@TypeGraphQL.InputType("TypeCreateNestedOneWithoutNaturalGiftTypesInput", {})
export class TypeCreateNestedOneWithoutNaturalGiftTypesInput {
  @TypeGraphQL.Field(_type => TypeCreateWithoutNaturalGiftTypesInput, {
    nullable: true
  })
  create?: TypeCreateWithoutNaturalGiftTypesInput | undefined;

  @TypeGraphQL.Field(_type => TypeCreateOrConnectWithoutNaturalGiftTypesInput, {
    nullable: true
  })
  connectOrCreate?: TypeCreateOrConnectWithoutNaturalGiftTypesInput | undefined;

  @TypeGraphQL.Field(_type => TypeWhereUniqueInput, {
    nullable: true
  })
  connect?: TypeWhereUniqueInput | undefined;
}

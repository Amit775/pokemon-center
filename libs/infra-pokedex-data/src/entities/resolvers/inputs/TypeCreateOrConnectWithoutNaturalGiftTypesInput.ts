import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeCreateWithoutNaturalGiftTypesInput } from "../inputs/TypeCreateWithoutNaturalGiftTypesInput";
import { TypeWhereUniqueInput } from "../inputs/TypeWhereUniqueInput";

@TypeGraphQL.InputType("TypeCreateOrConnectWithoutNaturalGiftTypesInput", {})
export class TypeCreateOrConnectWithoutNaturalGiftTypesInput {
  @TypeGraphQL.Field(_type => TypeWhereUniqueInput, {
    nullable: false
  })
  where!: TypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => TypeCreateWithoutNaturalGiftTypesInput, {
    nullable: false
  })
  create!: TypeCreateWithoutNaturalGiftTypesInput;
}

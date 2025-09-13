import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesCreateWithoutNaturalGiftTypesInput } from "../inputs/TypesCreateWithoutNaturalGiftTypesInput";
import { TypesWhereUniqueInput } from "../inputs/TypesWhereUniqueInput";

@TypeGraphQL.InputType("TypesCreateOrConnectWithoutNaturalGiftTypesInput", {})
export class TypesCreateOrConnectWithoutNaturalGiftTypesInput {
  @TypeGraphQL.Field(_type => TypesWhereUniqueInput, {
    nullable: false
  })
  where!: TypesWhereUniqueInput;

  @TypeGraphQL.Field(_type => TypesCreateWithoutNaturalGiftTypesInput, {
    nullable: false
  })
  create!: TypesCreateWithoutNaturalGiftTypesInput;
}

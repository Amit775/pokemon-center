import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesCreateWithoutNaturalGiftTypesInput } from "../inputs/TypesCreateWithoutNaturalGiftTypesInput";
import { TypesUpdateWithoutNaturalGiftTypesInput } from "../inputs/TypesUpdateWithoutNaturalGiftTypesInput";
import { TypesWhereInput } from "../inputs/TypesWhereInput";

@TypeGraphQL.InputType("TypesUpsertWithoutNaturalGiftTypesInput", {})
export class TypesUpsertWithoutNaturalGiftTypesInput {
  @TypeGraphQL.Field(_type => TypesUpdateWithoutNaturalGiftTypesInput, {
    nullable: false
  })
  update!: TypesUpdateWithoutNaturalGiftTypesInput;

  @TypeGraphQL.Field(_type => TypesCreateWithoutNaturalGiftTypesInput, {
    nullable: false
  })
  create!: TypesCreateWithoutNaturalGiftTypesInput;

  @TypeGraphQL.Field(_type => TypesWhereInput, {
    nullable: true
  })
  where?: TypesWhereInput | undefined;
}

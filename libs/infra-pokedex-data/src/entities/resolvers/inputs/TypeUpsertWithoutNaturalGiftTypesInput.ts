import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeCreateWithoutNaturalGiftTypesInput } from "../inputs/TypeCreateWithoutNaturalGiftTypesInput";
import { TypeUpdateWithoutNaturalGiftTypesInput } from "../inputs/TypeUpdateWithoutNaturalGiftTypesInput";
import { TypeWhereInput } from "../inputs/TypeWhereInput";

@TypeGraphQL.InputType("TypeUpsertWithoutNaturalGiftTypesInput", {})
export class TypeUpsertWithoutNaturalGiftTypesInput {
  @TypeGraphQL.Field(_type => TypeUpdateWithoutNaturalGiftTypesInput, {
    nullable: false
  })
  update!: TypeUpdateWithoutNaturalGiftTypesInput;

  @TypeGraphQL.Field(_type => TypeCreateWithoutNaturalGiftTypesInput, {
    nullable: false
  })
  create!: TypeCreateWithoutNaturalGiftTypesInput;

  @TypeGraphQL.Field(_type => TypeWhereInput, {
    nullable: true
  })
  where?: TypeWhereInput | undefined;
}

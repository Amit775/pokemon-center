import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeUpdateWithoutNaturalGiftTypesInput } from "../inputs/TypeUpdateWithoutNaturalGiftTypesInput";
import { TypeWhereInput } from "../inputs/TypeWhereInput";

@TypeGraphQL.InputType("TypeUpdateToOneWithWhereWithoutNaturalGiftTypesInput", {})
export class TypeUpdateToOneWithWhereWithoutNaturalGiftTypesInput {
  @TypeGraphQL.Field(_type => TypeWhereInput, {
    nullable: true
  })
  where?: TypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => TypeUpdateWithoutNaturalGiftTypesInput, {
    nullable: false
  })
  data!: TypeUpdateWithoutNaturalGiftTypesInput;
}

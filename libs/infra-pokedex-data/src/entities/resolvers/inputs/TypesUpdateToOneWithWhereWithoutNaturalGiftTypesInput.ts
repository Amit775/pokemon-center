import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesUpdateWithoutNaturalGiftTypesInput } from "../inputs/TypesUpdateWithoutNaturalGiftTypesInput";
import { TypesWhereInput } from "../inputs/TypesWhereInput";

@TypeGraphQL.InputType("TypesUpdateToOneWithWhereWithoutNaturalGiftTypesInput", {})
export class TypesUpdateToOneWithWhereWithoutNaturalGiftTypesInput {
  @TypeGraphQL.Field(_type => TypesWhereInput, {
    nullable: true
  })
  where?: TypesWhereInput | undefined;

  @TypeGraphQL.Field(_type => TypesUpdateWithoutNaturalGiftTypesInput, {
    nullable: false
  })
  data!: TypesUpdateWithoutNaturalGiftTypesInput;
}

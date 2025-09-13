import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesCreateWithoutFormTypesInput } from "../inputs/TypesCreateWithoutFormTypesInput";
import { TypesUpdateWithoutFormTypesInput } from "../inputs/TypesUpdateWithoutFormTypesInput";
import { TypesWhereInput } from "../inputs/TypesWhereInput";

@TypeGraphQL.InputType("TypesUpsertWithoutFormTypesInput", {})
export class TypesUpsertWithoutFormTypesInput {
  @TypeGraphQL.Field(_type => TypesUpdateWithoutFormTypesInput, {
    nullable: false
  })
  update!: TypesUpdateWithoutFormTypesInput;

  @TypeGraphQL.Field(_type => TypesCreateWithoutFormTypesInput, {
    nullable: false
  })
  create!: TypesCreateWithoutFormTypesInput;

  @TypeGraphQL.Field(_type => TypesWhereInput, {
    nullable: true
  })
  where?: TypesWhereInput | undefined;
}

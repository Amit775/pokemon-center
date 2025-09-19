import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeCreateWithoutFormTypesInput } from "../inputs/TypeCreateWithoutFormTypesInput";
import { TypeUpdateWithoutFormTypesInput } from "../inputs/TypeUpdateWithoutFormTypesInput";
import { TypeWhereInput } from "../inputs/TypeWhereInput";

@TypeGraphQL.InputType("TypeUpsertWithoutFormTypesInput", {})
export class TypeUpsertWithoutFormTypesInput {
  @TypeGraphQL.Field(_type => TypeUpdateWithoutFormTypesInput, {
    nullable: false
  })
  update!: TypeUpdateWithoutFormTypesInput;

  @TypeGraphQL.Field(_type => TypeCreateWithoutFormTypesInput, {
    nullable: false
  })
  create!: TypeCreateWithoutFormTypesInput;

  @TypeGraphQL.Field(_type => TypeWhereInput, {
    nullable: true
  })
  where?: TypeWhereInput | undefined;
}

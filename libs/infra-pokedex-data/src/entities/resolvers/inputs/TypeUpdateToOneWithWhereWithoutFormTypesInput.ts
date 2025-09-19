import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeUpdateWithoutFormTypesInput } from "../inputs/TypeUpdateWithoutFormTypesInput";
import { TypeWhereInput } from "../inputs/TypeWhereInput";

@TypeGraphQL.InputType("TypeUpdateToOneWithWhereWithoutFormTypesInput", {})
export class TypeUpdateToOneWithWhereWithoutFormTypesInput {
  @TypeGraphQL.Field(_type => TypeWhereInput, {
    nullable: true
  })
  where?: TypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => TypeUpdateWithoutFormTypesInput, {
    nullable: false
  })
  data!: TypeUpdateWithoutFormTypesInput;
}

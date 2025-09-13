import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesUpdateWithoutFormTypesInput } from "../inputs/TypesUpdateWithoutFormTypesInput";
import { TypesWhereInput } from "../inputs/TypesWhereInput";

@TypeGraphQL.InputType("TypesUpdateToOneWithWhereWithoutFormTypesInput", {})
export class TypesUpdateToOneWithWhereWithoutFormTypesInput {
  @TypeGraphQL.Field(_type => TypesWhereInput, {
    nullable: true
  })
  where?: TypesWhereInput | undefined;

  @TypeGraphQL.Field(_type => TypesUpdateWithoutFormTypesInput, {
    nullable: false
  })
  data!: TypesUpdateWithoutFormTypesInput;
}

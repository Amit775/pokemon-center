import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeUpdateWithoutPartyTypesInput } from "../inputs/TypeUpdateWithoutPartyTypesInput";
import { TypeWhereInput } from "../inputs/TypeWhereInput";

@TypeGraphQL.InputType("TypeUpdateToOneWithWhereWithoutPartyTypesInput", {})
export class TypeUpdateToOneWithWhereWithoutPartyTypesInput {
  @TypeGraphQL.Field(_type => TypeWhereInput, {
    nullable: true
  })
  where?: TypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => TypeUpdateWithoutPartyTypesInput, {
    nullable: false
  })
  data!: TypeUpdateWithoutPartyTypesInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesUpdateWithoutPartyTypesInput } from "../inputs/TypesUpdateWithoutPartyTypesInput";
import { TypesWhereInput } from "../inputs/TypesWhereInput";

@TypeGraphQL.InputType("TypesUpdateToOneWithWhereWithoutPartyTypesInput", {})
export class TypesUpdateToOneWithWhereWithoutPartyTypesInput {
  @TypeGraphQL.Field(_type => TypesWhereInput, {
    nullable: true
  })
  where?: TypesWhereInput | undefined;

  @TypeGraphQL.Field(_type => TypesUpdateWithoutPartyTypesInput, {
    nullable: false
  })
  data!: TypesUpdateWithoutPartyTypesInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeUpdateWithoutEfficacyInput } from "../inputs/TypeUpdateWithoutEfficacyInput";
import { TypeWhereInput } from "../inputs/TypeWhereInput";

@TypeGraphQL.InputType("TypeUpdateToOneWithWhereWithoutEfficacyInput", {})
export class TypeUpdateToOneWithWhereWithoutEfficacyInput {
  @TypeGraphQL.Field(_type => TypeWhereInput, {
    nullable: true
  })
  where?: TypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => TypeUpdateWithoutEfficacyInput, {
    nullable: false
  })
  data!: TypeUpdateWithoutEfficacyInput;
}

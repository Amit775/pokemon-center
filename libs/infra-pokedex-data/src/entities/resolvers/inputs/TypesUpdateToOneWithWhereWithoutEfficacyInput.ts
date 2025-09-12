import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesUpdateWithoutEfficacyInput } from "../inputs/TypesUpdateWithoutEfficacyInput";
import { TypesWhereInput } from "../inputs/TypesWhereInput";

@TypeGraphQL.InputType("TypesUpdateToOneWithWhereWithoutEfficacyInput", {})
export class TypesUpdateToOneWithWhereWithoutEfficacyInput {
  @TypeGraphQL.Field(_type => TypesWhereInput, {
    nullable: true
  })
  where?: TypesWhereInput | undefined;

  @TypeGraphQL.Field(_type => TypesUpdateWithoutEfficacyInput, {
    nullable: false
  })
  data!: TypesUpdateWithoutEfficacyInput;
}

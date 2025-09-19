import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeUpdateWithoutEfficacyTargetInput } from "../inputs/TypeUpdateWithoutEfficacyTargetInput";
import { TypeWhereInput } from "../inputs/TypeWhereInput";

@TypeGraphQL.InputType("TypeUpdateToOneWithWhereWithoutEfficacyTargetInput", {})
export class TypeUpdateToOneWithWhereWithoutEfficacyTargetInput {
  @TypeGraphQL.Field(_type => TypeWhereInput, {
    nullable: true
  })
  where?: TypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => TypeUpdateWithoutEfficacyTargetInput, {
    nullable: false
  })
  data!: TypeUpdateWithoutEfficacyTargetInput;
}

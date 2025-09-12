import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesUpdateWithoutEfficacyTargetInput } from "../inputs/TypesUpdateWithoutEfficacyTargetInput";
import { TypesWhereInput } from "../inputs/TypesWhereInput";

@TypeGraphQL.InputType("TypesUpdateToOneWithWhereWithoutEfficacyTargetInput", {})
export class TypesUpdateToOneWithWhereWithoutEfficacyTargetInput {
  @TypeGraphQL.Field(_type => TypesWhereInput, {
    nullable: true
  })
  where?: TypesWhereInput | undefined;

  @TypeGraphQL.Field(_type => TypesUpdateWithoutEfficacyTargetInput, {
    nullable: false
  })
  data!: TypesUpdateWithoutEfficacyTargetInput;
}

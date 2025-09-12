import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesCreateWithoutEfficacyTargetInput } from "../inputs/TypesCreateWithoutEfficacyTargetInput";
import { TypesUpdateWithoutEfficacyTargetInput } from "../inputs/TypesUpdateWithoutEfficacyTargetInput";
import { TypesWhereInput } from "../inputs/TypesWhereInput";

@TypeGraphQL.InputType("TypesUpsertWithoutEfficacyTargetInput", {})
export class TypesUpsertWithoutEfficacyTargetInput {
  @TypeGraphQL.Field(_type => TypesUpdateWithoutEfficacyTargetInput, {
    nullable: false
  })
  update!: TypesUpdateWithoutEfficacyTargetInput;

  @TypeGraphQL.Field(_type => TypesCreateWithoutEfficacyTargetInput, {
    nullable: false
  })
  create!: TypesCreateWithoutEfficacyTargetInput;

  @TypeGraphQL.Field(_type => TypesWhereInput, {
    nullable: true
  })
  where?: TypesWhereInput | undefined;
}

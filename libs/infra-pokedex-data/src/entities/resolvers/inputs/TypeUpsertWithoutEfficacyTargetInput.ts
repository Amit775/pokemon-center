import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeCreateWithoutEfficacyTargetInput } from "../inputs/TypeCreateWithoutEfficacyTargetInput";
import { TypeUpdateWithoutEfficacyTargetInput } from "../inputs/TypeUpdateWithoutEfficacyTargetInput";
import { TypeWhereInput } from "../inputs/TypeWhereInput";

@TypeGraphQL.InputType("TypeUpsertWithoutEfficacyTargetInput", {})
export class TypeUpsertWithoutEfficacyTargetInput {
  @TypeGraphQL.Field(_type => TypeUpdateWithoutEfficacyTargetInput, {
    nullable: false
  })
  update!: TypeUpdateWithoutEfficacyTargetInput;

  @TypeGraphQL.Field(_type => TypeCreateWithoutEfficacyTargetInput, {
    nullable: false
  })
  create!: TypeCreateWithoutEfficacyTargetInput;

  @TypeGraphQL.Field(_type => TypeWhereInput, {
    nullable: true
  })
  where?: TypeWhereInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationCreateWithoutTypesInput } from "../inputs/GenerationCreateWithoutTypesInput";
import { GenerationUpdateWithoutTypesInput } from "../inputs/GenerationUpdateWithoutTypesInput";
import { GenerationWhereInput } from "../inputs/GenerationWhereInput";

@TypeGraphQL.InputType("GenerationUpsertWithoutTypesInput", {})
export class GenerationUpsertWithoutTypesInput {
  @TypeGraphQL.Field(_type => GenerationUpdateWithoutTypesInput, {
    nullable: false
  })
  update!: GenerationUpdateWithoutTypesInput;

  @TypeGraphQL.Field(_type => GenerationCreateWithoutTypesInput, {
    nullable: false
  })
  create!: GenerationCreateWithoutTypesInput;

  @TypeGraphQL.Field(_type => GenerationWhereInput, {
    nullable: true
  })
  where?: GenerationWhereInput | undefined;
}

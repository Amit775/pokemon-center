import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationCreateWithoutAbilitiesInput } from "../inputs/GenerationCreateWithoutAbilitiesInput";
import { GenerationUpdateWithoutAbilitiesInput } from "../inputs/GenerationUpdateWithoutAbilitiesInput";
import { GenerationWhereInput } from "../inputs/GenerationWhereInput";

@TypeGraphQL.InputType("GenerationUpsertWithoutAbilitiesInput", {})
export class GenerationUpsertWithoutAbilitiesInput {
  @TypeGraphQL.Field(_type => GenerationUpdateWithoutAbilitiesInput, {
    nullable: false
  })
  update!: GenerationUpdateWithoutAbilitiesInput;

  @TypeGraphQL.Field(_type => GenerationCreateWithoutAbilitiesInput, {
    nullable: false
  })
  create!: GenerationCreateWithoutAbilitiesInput;

  @TypeGraphQL.Field(_type => GenerationWhereInput, {
    nullable: true
  })
  where?: GenerationWhereInput | undefined;
}

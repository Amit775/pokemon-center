import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationCreateWithoutItemGameIndicesInput } from "../inputs/GenerationCreateWithoutItemGameIndicesInput";
import { GenerationUpdateWithoutItemGameIndicesInput } from "../inputs/GenerationUpdateWithoutItemGameIndicesInput";
import { GenerationWhereInput } from "../inputs/GenerationWhereInput";

@TypeGraphQL.InputType("GenerationUpsertWithoutItemGameIndicesInput", {})
export class GenerationUpsertWithoutItemGameIndicesInput {
  @TypeGraphQL.Field(_type => GenerationUpdateWithoutItemGameIndicesInput, {
    nullable: false
  })
  update!: GenerationUpdateWithoutItemGameIndicesInput;

  @TypeGraphQL.Field(_type => GenerationCreateWithoutItemGameIndicesInput, {
    nullable: false
  })
  create!: GenerationCreateWithoutItemGameIndicesInput;

  @TypeGraphQL.Field(_type => GenerationWhereInput, {
    nullable: true
  })
  where?: GenerationWhereInput | undefined;
}

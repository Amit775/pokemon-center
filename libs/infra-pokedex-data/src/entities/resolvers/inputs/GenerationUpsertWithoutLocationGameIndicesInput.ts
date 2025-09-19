import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationCreateWithoutLocationGameIndicesInput } from "../inputs/GenerationCreateWithoutLocationGameIndicesInput";
import { GenerationUpdateWithoutLocationGameIndicesInput } from "../inputs/GenerationUpdateWithoutLocationGameIndicesInput";
import { GenerationWhereInput } from "../inputs/GenerationWhereInput";

@TypeGraphQL.InputType("GenerationUpsertWithoutLocationGameIndicesInput", {})
export class GenerationUpsertWithoutLocationGameIndicesInput {
  @TypeGraphQL.Field(_type => GenerationUpdateWithoutLocationGameIndicesInput, {
    nullable: false
  })
  update!: GenerationUpdateWithoutLocationGameIndicesInput;

  @TypeGraphQL.Field(_type => GenerationCreateWithoutLocationGameIndicesInput, {
    nullable: false
  })
  create!: GenerationCreateWithoutLocationGameIndicesInput;

  @TypeGraphQL.Field(_type => GenerationWhereInput, {
    nullable: true
  })
  where?: GenerationWhereInput | undefined;
}

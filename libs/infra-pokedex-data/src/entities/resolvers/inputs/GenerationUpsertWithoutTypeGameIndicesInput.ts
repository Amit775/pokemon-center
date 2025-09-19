import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationCreateWithoutTypeGameIndicesInput } from "../inputs/GenerationCreateWithoutTypeGameIndicesInput";
import { GenerationUpdateWithoutTypeGameIndicesInput } from "../inputs/GenerationUpdateWithoutTypeGameIndicesInput";
import { GenerationWhereInput } from "../inputs/GenerationWhereInput";

@TypeGraphQL.InputType("GenerationUpsertWithoutTypeGameIndicesInput", {})
export class GenerationUpsertWithoutTypeGameIndicesInput {
  @TypeGraphQL.Field(_type => GenerationUpdateWithoutTypeGameIndicesInput, {
    nullable: false
  })
  update!: GenerationUpdateWithoutTypeGameIndicesInput;

  @TypeGraphQL.Field(_type => GenerationCreateWithoutTypeGameIndicesInput, {
    nullable: false
  })
  create!: GenerationCreateWithoutTypeGameIndicesInput;

  @TypeGraphQL.Field(_type => GenerationWhereInput, {
    nullable: true
  })
  where?: GenerationWhereInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationCreateOrConnectWithoutItemGameIndicesInput } from "../inputs/GenerationCreateOrConnectWithoutItemGameIndicesInput";
import { GenerationCreateWithoutItemGameIndicesInput } from "../inputs/GenerationCreateWithoutItemGameIndicesInput";
import { GenerationUpdateToOneWithWhereWithoutItemGameIndicesInput } from "../inputs/GenerationUpdateToOneWithWhereWithoutItemGameIndicesInput";
import { GenerationUpsertWithoutItemGameIndicesInput } from "../inputs/GenerationUpsertWithoutItemGameIndicesInput";
import { GenerationWhereUniqueInput } from "../inputs/GenerationWhereUniqueInput";

@TypeGraphQL.InputType("GenerationUpdateOneRequiredWithoutItemGameIndicesNestedInput", {})
export class GenerationUpdateOneRequiredWithoutItemGameIndicesNestedInput {
  @TypeGraphQL.Field(_type => GenerationCreateWithoutItemGameIndicesInput, {
    nullable: true
  })
  create?: GenerationCreateWithoutItemGameIndicesInput | undefined;

  @TypeGraphQL.Field(_type => GenerationCreateOrConnectWithoutItemGameIndicesInput, {
    nullable: true
  })
  connectOrCreate?: GenerationCreateOrConnectWithoutItemGameIndicesInput | undefined;

  @TypeGraphQL.Field(_type => GenerationUpsertWithoutItemGameIndicesInput, {
    nullable: true
  })
  upsert?: GenerationUpsertWithoutItemGameIndicesInput | undefined;

  @TypeGraphQL.Field(_type => GenerationWhereUniqueInput, {
    nullable: true
  })
  connect?: GenerationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => GenerationUpdateToOneWithWhereWithoutItemGameIndicesInput, {
    nullable: true
  })
  update?: GenerationUpdateToOneWithWhereWithoutItemGameIndicesInput | undefined;
}

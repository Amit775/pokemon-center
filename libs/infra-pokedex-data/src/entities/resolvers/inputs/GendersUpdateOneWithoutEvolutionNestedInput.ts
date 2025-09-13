import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GendersCreateOrConnectWithoutEvolutionInput } from "../inputs/GendersCreateOrConnectWithoutEvolutionInput";
import { GendersCreateWithoutEvolutionInput } from "../inputs/GendersCreateWithoutEvolutionInput";
import { GendersUpdateToOneWithWhereWithoutEvolutionInput } from "../inputs/GendersUpdateToOneWithWhereWithoutEvolutionInput";
import { GendersUpsertWithoutEvolutionInput } from "../inputs/GendersUpsertWithoutEvolutionInput";
import { GendersWhereInput } from "../inputs/GendersWhereInput";
import { GendersWhereUniqueInput } from "../inputs/GendersWhereUniqueInput";

@TypeGraphQL.InputType("GendersUpdateOneWithoutEvolutionNestedInput", {})
export class GendersUpdateOneWithoutEvolutionNestedInput {
  @TypeGraphQL.Field(_type => GendersCreateWithoutEvolutionInput, {
    nullable: true
  })
  create?: GendersCreateWithoutEvolutionInput | undefined;

  @TypeGraphQL.Field(_type => GendersCreateOrConnectWithoutEvolutionInput, {
    nullable: true
  })
  connectOrCreate?: GendersCreateOrConnectWithoutEvolutionInput | undefined;

  @TypeGraphQL.Field(_type => GendersUpsertWithoutEvolutionInput, {
    nullable: true
  })
  upsert?: GendersUpsertWithoutEvolutionInput | undefined;

  @TypeGraphQL.Field(_type => GendersWhereInput, {
    nullable: true
  })
  disconnect?: GendersWhereInput | undefined;

  @TypeGraphQL.Field(_type => GendersWhereInput, {
    nullable: true
  })
  delete?: GendersWhereInput | undefined;

  @TypeGraphQL.Field(_type => GendersWhereUniqueInput, {
    nullable: true
  })
  connect?: GendersWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => GendersUpdateToOneWithWhereWithoutEvolutionInput, {
    nullable: true
  })
  update?: GendersUpdateToOneWithWhereWithoutEvolutionInput | undefined;
}

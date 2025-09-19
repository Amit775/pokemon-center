import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenderCreateOrConnectWithoutEvolutionInput } from "../inputs/GenderCreateOrConnectWithoutEvolutionInput";
import { GenderCreateWithoutEvolutionInput } from "../inputs/GenderCreateWithoutEvolutionInput";
import { GenderUpdateToOneWithWhereWithoutEvolutionInput } from "../inputs/GenderUpdateToOneWithWhereWithoutEvolutionInput";
import { GenderUpsertWithoutEvolutionInput } from "../inputs/GenderUpsertWithoutEvolutionInput";
import { GenderWhereInput } from "../inputs/GenderWhereInput";
import { GenderWhereUniqueInput } from "../inputs/GenderWhereUniqueInput";

@TypeGraphQL.InputType("GenderUpdateOneWithoutEvolutionNestedInput", {})
export class GenderUpdateOneWithoutEvolutionNestedInput {
  @TypeGraphQL.Field(_type => GenderCreateWithoutEvolutionInput, {
    nullable: true
  })
  create?: GenderCreateWithoutEvolutionInput | undefined;

  @TypeGraphQL.Field(_type => GenderCreateOrConnectWithoutEvolutionInput, {
    nullable: true
  })
  connectOrCreate?: GenderCreateOrConnectWithoutEvolutionInput | undefined;

  @TypeGraphQL.Field(_type => GenderUpsertWithoutEvolutionInput, {
    nullable: true
  })
  upsert?: GenderUpsertWithoutEvolutionInput | undefined;

  @TypeGraphQL.Field(_type => GenderWhereInput, {
    nullable: true
  })
  disconnect?: GenderWhereInput | undefined;

  @TypeGraphQL.Field(_type => GenderWhereInput, {
    nullable: true
  })
  delete?: GenderWhereInput | undefined;

  @TypeGraphQL.Field(_type => GenderWhereUniqueInput, {
    nullable: true
  })
  connect?: GenderWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => GenderUpdateToOneWithWhereWithoutEvolutionInput, {
    nullable: true
  })
  update?: GenderUpdateToOneWithWhereWithoutEvolutionInput | undefined;
}

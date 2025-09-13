import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateWithoutTargetInput } from "../inputs/MovesCreateWithoutTargetInput";
import { MovesUpdateWithoutTargetInput } from "../inputs/MovesUpdateWithoutTargetInput";
import { MovesWhereUniqueInput } from "../inputs/MovesWhereUniqueInput";

@TypeGraphQL.InputType("MovesUpsertWithWhereUniqueWithoutTargetInput", {})
export class MovesUpsertWithWhereUniqueWithoutTargetInput {
  @TypeGraphQL.Field(_type => MovesWhereUniqueInput, {
    nullable: false
  })
  where!: MovesWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovesUpdateWithoutTargetInput, {
    nullable: false
  })
  update!: MovesUpdateWithoutTargetInput;

  @TypeGraphQL.Field(_type => MovesCreateWithoutTargetInput, {
    nullable: false
  })
  create!: MovesCreateWithoutTargetInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Stats } from "../../models/Stats";

@TypeGraphQL.ObjectType("CreateManyAndReturnCharacteristics", {})
export class CreateManyAndReturnCharacteristics {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  stat_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  gene_mod_5!: number;

  @TypeGraphQL.Field(_type => Stats, {
    nullable: false
  })
  stat!: Stats;
}

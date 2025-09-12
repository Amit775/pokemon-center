import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Generations } from "../../models/Generations";
import { Locations } from "../../models/Locations";

@TypeGraphQL.ObjectType("CreateManyAndReturnLocationGameIndices", {})
export class CreateManyAndReturnLocationGameIndices {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  location_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  generation_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  game_index!: number;

  @TypeGraphQL.Field(_type => Locations, {
    nullable: false
  })
  location!: Locations;

  @TypeGraphQL.Field(_type => Generations, {
    nullable: false
  })
  generation!: Generations;
}

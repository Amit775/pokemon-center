import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Generation } from "../../models/Generation";
import { Location } from "../../models/Location";

@TypeGraphQL.ObjectType("CreateManyAndReturnLocationGameIndex", {})
export class CreateManyAndReturnLocationGameIndex {
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

  @TypeGraphQL.Field(_type => Location, {
    nullable: false
  })
  location!: Location;

  @TypeGraphQL.Field(_type => Generation, {
    nullable: false
  })
  generation!: Generation;
}
